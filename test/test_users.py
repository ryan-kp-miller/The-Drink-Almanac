import requests

API_BASE_URL = "http://127.0.0.1:5000/api/"

# register a new user
payload = {
    'username': "test",
    'password': "test",
}
response = requests.post(API_BASE_URL + "register", json=payload)
data = response.json()
print(f"Response Status Code: {response.status_code}")
if 'message' in data:
    print(f"Server message: {data['message']}")


# add a favorite to the test user
payload = {
    'user_id': 1,
    'drink_id': 11007,
}
response = requests.post(API_BASE_URL + "favorite", json=payload)
print(f"Response Status Code: {response.status_code}")
data = response.json()
if 'message' in data:
    print(f"Server message: {data['message']}")

# delete the favorite from the test user
response = requests.delete(API_BASE_URL + "favorite", json=payload)
print(f"Response Status Code: {response.status_code}")
data = response.json()
if 'message' in data:
    print(f"Server message: {data['message']}")


