import requests
from bs4 import BeautifulSoup

f = open("natBookTitlesFiction.txt", "w")


natBookTitlesFic = []
natBookTitlesNonF = []

natBookFicWiki= requests.get('https://en.wikipedia.org/wiki/National_Book_Award_for_Fiction')

natBookNonFicWiki = requests.get('https://en.wikipedia.org/wiki/National_Book_Award_for_Nonfiction')

def writeToFile(bookArray):
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
writeToFile(natBookTitlesFic)

print("Done - NB - Fiction")

#moving on to extracting the non-fiction book titles
natBookFicSoup = BeautifulSoup(natBookNonFicWiki.text, 'html.parser')

boldItems = natBookFicSoup.find_all('b')

#getting the book titles and putting them into an array
for item in boldItems:
  #furthermore, the winning book titles are italicized
  if item.i and item.a.get('title'):
    natBookTitlesNonF.append(item.i.text.replace(" ", "_"));

f = open("natBookTitlesNonFiction.txt", "w")

#reading the book titles into a file 
writeToFile(natBookTitlesNonF)


print("Done - NB - NonFiction")
