import requests
from bs4 import BeautifulSoup


natBookTitlesFic = []
natBookTitlesNonF = []
natBookTitlesPoetry = []
pulPrizeTitlesFiction = []
pulPrizeTitlesNonFiction = []
pulPrizeTitlesPoetry = []

natBookFicWiki= requests.get('https://en.wikipedia.org/wiki/National_Book_Award_for_Fiction')

natBookNonFicWiki = requests.get('https://en.wikipedia.org/wiki/National_Book_Award_for_Nonfiction')

natBookPoetryWiki = requests.get('https://en.wikipedia.org/wiki/National_Book_Award_for_Poetry')

pulPrizeFicWiki = requests.get('https://en.wikipedia.org/wiki/Pulitzer_Prize_for_Fiction')

pulPrizeNonFicWiki = requests.get('https://en.wikipedia.org/wiki/Pulitzer_Prize_for_General_Nonfiction')

pulPrizePoetryWiki = requests.get(
  'https://en.wikipedia.org/wiki/Pulitzer_Prize_for_Poetry')


def writeToFile(fileName, bookArray):
  f = open(fileName, "w")
  for x in range(len(bookArray)):
    f.write(bookArray[x])
    f.write("|||")
  f.close()

natBookFicSoup = BeautifulSoup(natBookFicWiki.text, 'html.parser')

#the winning book titles are bold on the wiki page
boldItems = natBookFicSoup.find_all('b')

#getting the book titles and putting them into an array
for item in boldItems:
  #furthermore, the winning book titles are italicized
  if item.i and item.a.get('title'):
    natBookTitlesFic.append(item.i.text.replace(" ", "_"));

#reading the book titles into a file 
writeToFile("natBookTitlesFiction.txt", natBookTitlesFic)

print("Done - NB - Fiction")

#moving on to extracting the non-fiction book titles
natBookFicSoup = BeautifulSoup(natBookNonFicWiki.text, 'html.parser')

boldItems = natBookFicSoup.find_all('b')

#getting the book titles and putting them into an array
for item in boldItems:
  #furthermore, the winning book titles are italicized
  if item.i and item.a.get('title'):
    natBookTitlesNonF.append(item.i.text.replace(" ", "_"));


#reading the book titles into a file 
writeToFile("natBookTitlesNonFiction.txt", natBookTitlesNonF)


print("Done - NB - NonFiction")



#moving on to extracting the poetry titles
natBookFicSoup = BeautifulSoup(natBookPoetryWiki.text, 'html.parser')

italicizedItems = natBookFicSoup.find_all('i')

#getting the book titles and putting them into an array
for item in italicizedItems:
  #the winning book titles should be bold
  if item.b:
    natBookTitlesPoetry.append(item.b.text.replace(" ", "_"))
    continue
  # natBookTitlesPoetry.append(item.text.replace(" ", "_"))


#reading the book titles into a file 
writeToFile("natBookTitlesPoetry.txt", natBookTitlesPoetry)

print("Done - NB - Poetry")

#--------------Pulitzer Prize------------------
#Fiction titles extraction
pulPrizeSoup = BeautifulSoup(pulPrizeFicWiki.text, 'html.parser')

#the book titles are enclosed within td elements
tdItems = pulPrizeSoup.find_all('td')


for x in range(len(tdItems)):
  if tdItems[x].b:
    if ("1" == tdItems[x].b.text[0]) | ("2" == tdItems[x].b.text[0]):
      continue
    if (tdItems[x].span):
      continue
    else:
      pulPrizeTitlesFiction.append(tdItems[x].b.text.replace(" ", "_"))


writeToFile("pulPrizeTitlesFiction.txt", pulPrizeTitlesFiction)

print("Done - PP - Fiction")


#Non-Fiction titles extraction

pulPrizeSoup = BeautifulSoup(pulPrizeNonFicWiki.text, 'html.parser')

italicizedItems = pulPrizeSoup.find_all('i')

for x in range (len(italicizedItems)):
  if italicizedItems[x].b:
    if(len(italicizedItems[x].b.text) > 1):
      pulPrizeTitlesNonFiction.append(
        italicizedItems[x].b.text.replace(" ", "_"))

writeToFile("pulPrizeTitlesNonFiction.txt", 
  pulPrizeTitlesNonFiction)


print("Done - PP - NonFiction")


#Poetry titles extraction

pulPrizeSoup = BeautifulSoup(pulPrizePoetryWiki.text, 'html.parser')

liItems = pulPrizeSoup.find_all('li')

for x in range (len(liItems)):
  if liItems[x].i and liItems[x].i.b:
      pulPrizeTitlesPoetry.append(
        liItems[x].i.b.text.replace(" ", "_"))

writeToFile("pulPrizeTitlesPoetry.txt", pulPrizeTitlesPoetry)

    




