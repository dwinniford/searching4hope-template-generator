# searching4hope-template-generator
Generates html from content file and template with placeholders

Uses EJS to generate template with content in place
https://ejs.co/

Install ejs globally to generate the template using the command line

The following command will output a basic html file with content in place:

`ejs ./templates/index.ejs -f ./test-data/data.json -o test_output.html`

Or run the script in render.js with:

`node render.js`

Recommend using "EJS language support" for snippets.