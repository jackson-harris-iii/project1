#!/bin/bash
# Simple Script for making project folder

GIT=false
RESET=false
FORCE=false

for args in $@
do
    case $args in
        -git)
            GIT=true
            ;;
        -reset)
            RESET=true 
            ;;
        -f)
            FORCE=true 
            ;;
        *)
            echo Improper argument: $args
            echo Aborting script
            exit
            ;;
    esac
done

echo Creating files...

if [ -e "./index.html" ] && [ $FORCE = false ]
then
    echo "Aborting script: index.html already exists (use -f to overwrite index.html)"
    exit
fi

(cat << _EOF_
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <script src="assets/javascript/app.js"></script>
</body>
</html>
_EOF_
) > ./index.html
mkdir -p ./assets/css ./assets/javascript ./assets/images
touch ./assets/javascript/app.js ./assets/css/style.css

echo Done!