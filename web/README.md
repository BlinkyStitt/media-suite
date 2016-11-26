# Media Suite - Web

A simple web entrypoint for Media Suite apps.

Built using [Clarity Seed](https://github.com/vmware/clarity-seed).


# Developing


```bash
# develop
docker run \
    --rm -it \
    -p 3001:3001 \
    -p 4000:4000 \
    -v "$(pwd):/usr/src/app" \
    node \
    sh -c "npm install && npm start"

# run unit tests
docker run --rm -it bwstitt/media-suite-web:latest npm test

# run e2e tests
docker run --rm -it bwstitt/media-suite-web:latest npm run test.e2e

# build and copy prod files
./build.sh
```


# Documentation

For documentation on the Clarity Design System, including a list of components and example usage, see [the clarity website](https://vmware.github.io/clarity).


## Directory structure
```
.
├── README.md
├── gulpfile.js                <- configuration of the gulp tasks
├── karma.conf.js              <- configuration of the test runner
├── karma-test-shim.js         <- shim for test runner
├── package.json               <- dependencies of the project
├── protractor.config.js       <- e2e tests configuration
├── src                        <- source code of the application
│   ├── app
│   │   └── components
│   │       └── <component>.component.html
│   │       └── <component>.component.scss
│   │       └── <component>.component.spec.ts
│   │       └── <component>.component.ts
│   │   └── app.component.html
│   │   └── app.component.scss
│   │   └── app.component.ts
│   │   └── app.e2e-spec.js    <- sample e2e spec file
│   │   └── app.module.ts
│   │   └── app.routing.ts
│   │   └── main.ts            <- boostrap file for the angular app 
│   └── index.html
├── tsconfig.json              <- configuration of the typescript project
├── tslint.json                <- sample configuration file for tslint
└── yarn.lock
```


# TODO

* logo
* helpful text at /setup


# License

VMware licensed the clarity-seed project under the MIT license.
