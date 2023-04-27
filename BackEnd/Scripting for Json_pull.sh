#pulls entire database into JSON file 
#saves into file called backupPretty
#need to make sure research_website_adminKey.json is in directory
cwd=$(pwd)
firestore-export -a "$cwd/research_website_adminKey.json" -b backupPretty.json -p

