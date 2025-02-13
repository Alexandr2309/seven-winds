module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
    ],
    root: true,
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2022,
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'react-refresh',
    ],
    settings: {
        react: {
            version: '18.3.3',
        },
    },
    rules: {
    // Possible Problems
    // Не форматируется автоматически
        'no-duplicate-case': [ 'warn' ],
        'no-template-curly-in-string': [ 'warn' ],
        'no-restricted-syntax': [ 'error', {
            selector: 'Identifier[name=\'classnames\']',
            message: 'Name classnames is deprecated! You should use classNames',
        },
        ],
        'react-refresh/only-export-components': 'warn',
        // Suggestions
        // Форматируется автоматически
        // const a = () => { return 10 }; -> const a = () => 10;
        'arrow-body-style': [ 'warn', 'as-needed' ],
        // если блок с условием не находится на одной строке с оператором, то оборачиваем в {}
        curly: [ 'warn', 'multi-line' ],
        // использование === и !==
        eqeqeq: [ 'warn', 'smart' ],
        'no-else-return': [ 'warn', {
            allowElseIf: false,
        } ],
        'no-extra-semi': [ 'warn' ],
        // .5 => 0.5
        'no-floating-decimal': [ 'warn' ],
        'no-lonely-if': [ 'warn' ],
        'no-unneeded-ternary': [ 'warn' ],
        'no-var': [ 'warn' ],
        'prefer-const': [ 'warn' ],
        // Не форматируется автоматически
        camelcase: [ 'warn' ],
        'no-alert': [ 'warn' ],
        'no-console': [ 'warn' ],
        // Layout & Formatting
        // Форматируется автоматически
        'array-bracket-spacing': [ 'warn', 'always' ],
        'array-element-newline': [ 'warn', 'consistent' ],
        // оборачиваем параметры стрелочной функции только в случае необходимости
        // a => b; (a: string) => b;
        'arrow-parens': [ 'warn', 'as-needed' ],
        'arrow-spacing': [ 'warn' ],
        'block-spacing': [ 'warn' ],
        'brace-style': [ 'warn' ],
        'comma-dangle': [ 'warn', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'always-multiline',
        },
        ],
        'comma-spacing': [ 'warn' ],
        // располагаем запятую после элемента в списках
        'comma-style': [ 'warn' ],
        'computed-property-spacing': [ 'warn' ],
        // при переносе свойств объекта на новую строку точка переносится вместе со свойством
        'dot-location': [ 'warn', 'property' ],
        // добавляем пустую строку в конце файла
        'eol-last': [ 'warn' ],
        'func-call-spacing': [ 'warn' ],
        'jsx-quotes': [ 'warn', 'prefer-single' ],
        'key-spacing': [ 'warn' ],
        'keyword-spacing': [ 'warn' ],
        'no-extra-parens': [ 'warn', 'all', {
            ignoreJSX: 'all',
        } ],
        'no-multi-spaces': [ 'warn' ],
        'no-trailing-spaces': [ 'warn' ],
        'no-whitespace-before-property': [ 'warn' ],
        'no-multiple-empty-lines': [ 'warn', {
            max: 1,
            maxEOF: 1,
            maxBOF: 0,
        } ],
        // если тело if, else, while, do-while и for не обернуто в {}, то пишем на одной строке с оператором
        'nonblock-statement-body-position': [ 'warn' ],
        'object-curly-newline': [ 'warn', {
            multiline: true,
            consistent: true,
        } ],
        'object-curly-spacing': [ 'warn', 'always' ],
        quotes: [ 'warn', 'single' ],
        'rest-spread-spacing': [ 'warn' ],
        semi: [ 'warn', 'always' ],
        'semi-spacing': [ 'warn' ],
        'semi-style': [ 'warn' ],
        'space-before-blocks': [ 'warn' ],
        'space-before-function-paren': [ 'warn', 'always' ],
        'space-in-parens': [ 'warn' ],
        'space-infix-ops': [ 'error', { int32Hint: false } ],
        'space-unary-ops': [ 'warn', {
            words: true,
            nonwords: false,
        },
        ],
        'template-curly-spacing': [ 'warn' ],
        // Не форматируется автоматически
        'max-len': [ 'warn', {
            code: 120,
            tabWidth: 4,
            comments: 110,
            ignoreUrls: true,
            ignorePattern: '^import\\s.+\\sfrom\\s.+;$',
        } ],
        // максимальное число строк 220, комментарии не входят
        'max-lines': [ 'warn', {
            max: 250,
            skipComments: true,
        } ],
        'max-statements-per-line': [ 'warn' ],
        //~~~~REACT~~~~
        'react/display-name': 'off',
        'react/prop-types': 'off',
        'react/no-string-refs': [ 'warn' ],
        'react/no-find-dom-node': [ 'warn' ],
        // явно задаем boolean пропс
        'react/jsx-boolean-value': [ 'warn', 'always' ],
        // закрывающий тег выровнен со строкой, содержащей открывающий тег
        'react/jsx-closing-bracket-location': [ 'warn', 'line-aligned' ],
        // всегда оборачиваем пропсы в {}
        'react/jsx-curly-brace-presence': [ 'warn', {
            props: 'always',
        },
        ],
        // одинаковый принцип разрыва строк внутри {}
        'react/jsx-curly-newline': [ 'warn' ],
        'react/jsx-curly-spacing': [ 'warn', 'never' ],
        'react/jsx-equals-spacing': [ 'warn' ],
        // один пропс может находиться на одной строке с тегом, несколько - нет
        'react/jsx-first-prop-new-line': [ 'warn', 'multiline-multiprop' ],
        'react/jsx-indent': [ 'warn', 4 ],
        'react/jsx-indent-props': [ 'warn', 4 ],
        // 1 пропс на строке
        'react/jsx-max-props-per-line': [ 'warn', {
            maximum: {
                single: 1,
                multi: 1,
            },
        } ],
        // проверяем нужен ли key элементу
        'react/jsx-key': [ 'warn', {
            checkFragmentShorthand: true,
        },
        ],
        // одно выражение на одной строке
        'react/jsx-one-expression-per-line': [ 'warn', {
            allow: 'literal', // допускается <p>Текст</p>
        } ],
        'react/jsx-pascal-case': [ 'warn' ],
        'react/jsx-props-no-multi-spaces': [ 'warn' ],
        'react/jsx-tag-spacing': [ 'warn', {
            closingSlash: 'never',
            beforeSelfClosing: 'never',
            afterOpening: 'never',
            beforeClosing: 'never',
        } ],
        'react/jsx-wrap-multilines': [ 'warn', {
            return: 'parens-new-line', // return ( + компонент с новой строки
            assignment: 'parens-new-line',
            declaration: 'parens-new-line',
            arrow: 'ignore',
            condition: 'ignore',
            logical: 'ignore',
            prop: 'ignore',
        } ],
        // самозакрывающийся тег, если нет вложенных элементов
        'react/self-closing-comp': [ 'warn' ],
        //~~~~TS~~~~
        '@typescript-eslint/ban-types': [ 'error', {
            types: {
                CallableFunction: 'It\'s toooo wide type',
            },
        },
        ],
        // ставим ; в интерфейсах и типах
        '@typescript-eslint/member-delimiter-style': [ 'warn', {
            multiline: {
                delimiter: 'semi',
                requireLast: true,
            },
            singleline: {
                delimiter: 'semi',
                requireLast: false,
            },
        } ],
        // func: (arg: string) => number;
        '@typescript-eslint/method-signature-style': 'warn',
        '@typescript-eslint/naming-convention': [ 'warn',
            {
                selector: 'interface',
                format: [ 'PascalCase' ],
                // предотвращаем возможность копирования старого интерфейса без изменения имени
                custom: {
                    regex: '^I[A-Z]',
                    match: false,
                },
            },
            {
                selector: 'typeAlias',
                format: [ 'PascalCase' ],
            },
        ],
        '@typescript-eslint/no-duplicate-enum-values': 'warn',
        '@typescript-eslint/indent': [ 'warn', 4, {
            ignoredNodes: [ 'PropertyDefinition',
                'CallExpression',
                'JSXElement *',
                'TSTypeParameterInstantiation',
                'JSXElement',
                'JSXAttribute' ],
            SwitchCase: 1,
        } ],
        '@typescript-eslint/no-unused-vars': [ 'warn', {
            vars: 'all',
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            caughtErrorsIgnorePattern: '^_',
        } ],
    },
}
