#!/bin/sh

function setup() {
    rm -Rf ./.tmp
    mkdir ./.tmp
    go get github.com/googlecodelabs/tools/claat
}

function build() {
    cat ./pws/PW0.md ./pws/PW1.md ./pws/PW2.md ./pws/PW3.md ./pws/PW4.md ./pws/PW5.md ./pws/PW6.md ./pws/PW7.md ./pws/PW8.md ./pws/PW99.md > ./.tmp/index.md
    claat export ./.tmp/index.md
    pushd docs
    claat install
    popd
}

function clean() {
    rm -Rf ./.tmp
}

function main() {
  setup && build && clean
}

main
