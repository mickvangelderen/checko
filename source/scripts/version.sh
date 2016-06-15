#!/usr/bin/env sh

# Because the package source is not in the root of the git repository, npm does
# not create a commit and tag for us. We do it manually here.

set -e

git add package.json
git commit -m "Update version to ${npm_package_version}"
git tag "${npm_config_tag_version_prefix}${npm_package_version}" -a -m "Version ${npm_package_version}"
