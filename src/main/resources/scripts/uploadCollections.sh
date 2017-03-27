#!/bin/bash
contentType="Content-Type:application/json"


parentDir=${PWD%/*}
fileLocation="${parentDir}/data/matchday"

i=0

for filename in ${fileLocation}/*; do
	curl -X PUT "https://apibaas-trial.apigee.net/markcourtney/footballapp/matchdays" -H $contentType -d @${filename}
	i=$((i+1))
done