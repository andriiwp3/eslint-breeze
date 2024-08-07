const { test } = require('uvu');
const assert = require('uvu/assert');
const { RuleTester } = require("eslint");
const requireDataCy = require("../../src/rules/require-data-cy");

const ruleTester = new RuleTester({
  languageOptions: { ecmaVersion: 2021, parserOptions: { ecmaFeatures: { jsx: true }} }
});

test('require-data-cy rule', () => {
    ruleTester.run('require-data-cy', requireDataCy, {
        valid: [
            { code: '<button data-cy="button">button with data-cy attribute</button>' },
            { code: '<input data-cy="input" placeholder="input with data-cy attribute" />' },
            { code: '<select data-cy="select" value="select with data-cy attribute"></select>' },
            { code: '<a data-cy="a" href="#">a with data-cy attribute</a>' },
            { code: '<textarea data-cy="textarea">textarea with data-cy attribute</textarea>' },
            { code: '<div>non-interactive element</div>' },
            {
                code: `
                    const Button = ({ children, dataCy }) => <button data-cy={dataCy}>{children}</button>
                    const App = () => <Button dataCy="custom-button" />
                `,
                errors: 1
            },
        ],
        invalid: [
            { code: '<button dataCy="wrong">button with wrong data-cy attribute</button>', errors: 1 },
            { code: '<button>button without data-cy attribute</button>', errors: 1 },
            { code: '<input placeholder="input without data-cy attribute" />', errors: 1 },
            { code: '<select value="select without data-cy attribute"></select>', errors: 1 },
            { code: '<a href="#">a without data-cy attribute</a>', errors: 1 },
            { code: '<textarea>textarea without data-cy attribute</textarea>', errors: 1 },
            { code: 'const Button = ({ children }) => <button>{children}</button>', errors: 1 },
            {
                code: `
                    const Button = ({ children }) => <button>{children}</button>
                    const App = () => <Button />
                `,
                errors: 1
            },
            // TODO: Uncomment once we add support for missing dataCy prop
            // {
            //     code: `
            //         const Button = ({ children, dataCy }) => <button>{children}</button>
            //         const App = () => <Button />
            //     `,
            //     errors: 2
            // },
            // {
            //     code: `
            //         const CustomButton = ({ children, dataCy }) => <button data-cy={dataCy}>{children}</button>
            //         const App = () => <CustomButton testProp="test" />
            //     `,
            //     errors: 1
            // },
        ],
    });

    assert.ok(true, 'All tests passed');
})

test.run();

