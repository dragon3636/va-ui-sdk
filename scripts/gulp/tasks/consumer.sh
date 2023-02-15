#!/bin/bash
set -e

pushd "dist/va/ui-sdk"
echo "Running consumer builds in $PWD"
# Prepare samples
# array=( 'custom' 'material' 'secondary' 'tailwindcss')
# for sample in "${array[@]}"; do
    # pushd "samples/${sample}/dist"
    yarn unlink || true
    yarn link
    popd
# done

# # Build ng cli app
pushd projects/showcase
# yarn install
yarn link @em-and-ai/ui-sdk
# yarn link file:projects/va/ui-sdk
# yarn link sample-custom
# yarn link @sample/material
# yarn link @sample/secondary
# yarn link @sample/tailwindcss
# yarn build:dev --output-path dist/dev
# yarn build:prod:jit --output-path dist/jit
# yarn build:prod:aot --output-path dist/aot
popd
