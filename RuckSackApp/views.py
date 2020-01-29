from django.http import HttpResponse
from django.shortcuts import render
import requests

####################### API URLS ######################
teleportRootUrl = "https://api.teleport.org/api/"
continentUrl = "https://api.teleport.org/api/continents/"
countryUrl = "https://api.teleport.org/api/countries/"
cityUrl = "https://api.teleport.org/api/cities/?search="


#######################################################


def view_home_page(request):
    continentResponse = requests.get(continentUrl)
    continentData = continentResponse.json()
    countryResponse = requests.get(countryUrl)
    countryData = countryResponse.json()
    cityResponse = requests.get(cityUrl)
    cityData = cityResponse.json()
    context = [
        continentData,
        countryData,
        cityData]

    return render(request, 'home_page.html', {'context': context})
