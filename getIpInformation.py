import socket
import requests
import pprint
import json

hostname = input("Enter a domain name : ")
ip_address = socket.gethostbyname(hostname)

request_url = 'https://geolocation-db.com/jsonp/' + ip_address
response = requests.get(request_url)
geolocation = response.content.decode()
geolocation = geolocation.split("(")[1].strip(")")
geolocation = json.loads(geolocation)
for key, value in geolocation.items():
    pprint.pprint(str(key) + " : " + str(value))


# Setelah mendapatkan IP dan geolocationnya, kita dapat mengecek pada google map dengan mengecek latitude dan longitude