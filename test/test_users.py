import requests

API_BASE_URL = "http://127.0.0.1:5000/api/"

def print_response(response):
    data = response.json()
    print(f"Response Status Code: {response.status_code}")
    if 'message' in data:
        print(f"Server message: {data['message']}")
    else:
        print("Server data keys: ", data.keys())

# check to see if the user already exists    
user_payload = {
    'username': "test",
    'password': "test",
}
response = requests.get(API_BASE_URL + "user", json=user_payload)
print_response(response)

if response.status_code == 200:
    user_id = response.json()['id']
else:
    # register a new user if the test user doesn't already exist
    response = requests.post(API_BASE_URL + "register", json=user_payload)
    print_response(response)
    user_id = response.json()['id']

# log in as the user
response = requests.post(API_BASE_URL + "login", json=user_payload)
print_response(response)

# add a favorite to the test user
payload_list = [
    {
        'user_id': user_id,
        'drink_id': 11007,
    },
    {
        'user_id': user_id,
        'drink_id': 11001,
    }
]

for payload in payload_list:
    response = requests.post(API_BASE_URL + "favorite", json=payload)
    print_response(response)


# delete the test user
response = requests.delete(API_BASE_URL + "user", json=user_payload)
print_response(response)

