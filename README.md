# palantir_blueprint_playground

### Bundle size:

| Only React | React + blueprint@1.35.7 | React + blueprint@2.0.0 | React + blueprint@3.12.0 |
|------------|---------------------|---------------------|-----------------------------------|
| 97 KiB     | 293 KiB             | 594 KiB             | 657 KiB                           |



```
npm install
```

Install all dependencies

```
node bundle_size.shell.js -i
```

Run build

```
node bundle_size.shell.js -b | grep "main"
```

```
 ==== main (1.0_bundle_size_only_react) ===

main-d14e0f46b9ac60c61422.bundle.js   97.4 KiB       0  [emitted]  main
Entrypoint main = main-d14e0f46b9ac60c61422.bundle.js

 ==== main (1.1_bundle_size_react_and_blueprint_1) ===

main-5785e0daad072f577924.bundle.js    293 KiB       0  [emitted]  [big]  main
Entrypoint main [big] = main-5785e0daad072f577924.bundle.js
  main-5785e0daad072f577924.bundle.js (293 KiB)
  main (293 KiB)
      main-5785e0daad072f577924.bundle.js

 ==== main (1.2_bundle_size_react_and_blueprint_2) ===

main-f6c698f35bee4936fee0.bundle.js    594 KiB       0  [emitted]  [big]  main
Entrypoint main [big] = main-f6c698f35bee4936fee0.bundle.js
  main-f6c698f35bee4936fee0.bundle.js (594 KiB)
  main (594 KiB)
      main-f6c698f35bee4936fee0.bundle.js

```


