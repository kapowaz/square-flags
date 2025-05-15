const fs = require('fs');
const colors = require('colors');
const { JSDOM } = require('jsdom');
const serialize = require('w3c-xmlserializer');

const FLAGS_PATH = './flags';
const FLAG_PALETTE_COLOR_NAMES = {
  '#333333': 'black',
  '#0052b4': 'blue',
  '#d80027': 'bright-red',
  '#fcfcfc': 'bright-white',
  '#85693d': 'brown',
  '#584528': 'dark-brown',
  '#496e2d': 'dark-green',
  '#818085': 'dark-grey',
  '#751a46': 'dark-pink',
  '#a2001d': 'dark-red',
  '#ffc635': 'dark-yellow',
  '#ff9811': 'gold',
  '#6da544': 'green',
  '#338af3': 'light-blue',
  '#f3f3f3': 'light-grey',
  '#dedde0': 'mid-grey-1',
  '#bdbcc1': 'mid-grey-2',
  '#acabb1': 'mid-grey-3',
  '#002266': 'navy',
  '#f5a9b8': 'pink',
  '#4a1f63': 'purple',
  '#9c27b0': 'violet',
  '#eeeeee': 'white',
  '#ffda44': 'yellow',
};

/**
 * Returns a promise to a string containing the original if the file is a
 * symlink
 */
async function getSymlinkOriginal(filename) {
  return new Promise((resolve, reject) => {
    fs.lstat(filename, function (err, stats) {
      if (err) return reject(err);

      const isSymLink = stats.isSymbolicLink();

      if (isSymLink) {
        fs.readlink(filename, (err, string) => {
          if (err) return reject(err);
          return resolve(string);
        });
      } else {
        return resolve('');
      }
    });
  });
}

/**
 * Iterate through all the .svg files (excluding symlinks) in FLAGS_PATH,
 * converting hexadecimal fill attributes to the corresponding named flag
 * palette colour.
 */
async function updateCustomProperties() {
  try {
    const files = fs
      .readdirSync(FLAGS_PATH, { recursive: true })
      .filter((file) => Boolean(file.match(/\.svg$/)));

    for (const file of files) {
      const filePath = `${FLAGS_PATH}/${file}`;
      const original = await getSymlinkOriginal(filePath);

      console.log(
        `${colors.green('✓')} Found SVG file:`,
        colors.brightWhite(filePath),
        `${original ? colors.yellow(`(symlink -> ${original})`) : ''}`,
      );

      /**
       * Skip any files which are symlinks
       */
      if (!original) {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const dom = new JSDOM(fileContent);

        /**
         * Find all elements within the DOM that have a fill attribute with a
         * hexadecimal value.
         */
        const fillElements = dom.window.document.querySelectorAll('[fill^="#"]');

        if (fillElements.length) {
          for (const element of fillElements) {
            const fillValue = element.attributes.getNamedItem('fill').value.toLowerCase();
            const colorName = FLAG_PALETTE_COLOR_NAMES[fillValue];

            /**
             * Find the corresponding colour name from the palette for this
             * fill; if it exists, create a custom property reference with the
             * original colour as fallback.
             */
            if (colorName) {
              const customProperty = `var(--flag-palette-${colorName}, ${fillValue})`;
              element.setAttribute('fill', customProperty);

              console.log(`↳ ${colors.yellow(element.nodeName)} ${fillValue} -> ${customProperty}`);
            } else {
              console.log(
                `↳ ${colors.yellow(element.nodeName)} ${fillValue} (preserving original value)`,
              );
            }
          }

          /**
           * Serialise the SVG back to an XML string and update the original file
           */
          const rootElement = dom.window.document.querySelector('svg');
          const svgString = serialize(rootElement);

          try {
            fs.writeFileSync(filePath, svgString, 'utf8');
            console.log(
              `${colors.green('✓')} Wrote updated SVG file to: ${colors.brightWhite(filePath)}`,
            );
          } catch (error) {
            console.error(
              `${colors.red('✗')} An error occurred writing SVG file '${filePath}': ${error}`,
            );
          }
        }
      }
    }
  } catch (error) {
    console.error(`${colors.red('✗')} Error running css-vars': ${error}`);
  }
}

updateCustomProperties();
