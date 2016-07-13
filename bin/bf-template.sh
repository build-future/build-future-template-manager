#!/usr/bin/env bash

set $option=$1

echo $option

case $1 in

    list)
        echo list files
        ;;

    *)
        echo "option $option not valid"
        exit
        ;;
esac


