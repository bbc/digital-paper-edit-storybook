#!/bin/bash

# Script based on https://github.com/bbc/iplayer-web-components/blob/cb8c4d91dff48fe08c1c0e7459c82c01824da35f/scripts/link.sh
FIREBASE_REPO="digital-paper-edit-firebase"
MODULE_PATH="$(pwd)/../$FIREBASE_REPO";

echo "VERIFY: $FIREBASE_REPO exists";
if [ ! -d "$MODULE_PATH" ]
then
    echo "ERROR: $FIREBASE_REPO does not exist";
    exit 1;
fi

cd ../$FIREBASE_REPO;
echo "";
echo $(pwd);
echo "SYMLINK: Pointing $FIREBASE_REPO's digital-paper-edit-storybook to local repo";
npm link ../digital-paper-edit-storybook/dist;
cd ~;
exit 0;