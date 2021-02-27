# DjangoReactAlignmentapp
# Backend:
"AlignmentApp\align_controller\align_controller"  is the entry point of the django app.
The settings.py file of the django includes the configuration of the alignapi (Path: "AlignmentApp\align_controller\align_api")
which holds the crud framework for post, get for sequence alignment submission and viewing the results
This api uses biopython library and does the pairwise alignment of the given DNA sequence with that of a protein and returns the protein name and the start
and end point of the region of alignment.
For the alignment to work in a timely manner, the fastas of the protein are downloaded in this app
Sequence data example is as follows:
[
    {
        "sequence_id": 1,
        "sequence": "TATATTTAACC",
        "created_at": "2021-02-27T20:28:24.421127Z",
        "result": " Found matching: NC_023640 at: [0, 172]"
    }
]


To run this backend:
You could use pip install to install the requirements mentioned in the requirements.txt
Go into: AlignmentApp\align_controller and migrate the models using "python manage.py makemigrations" followed by "python manage.py migrate"
Then inside the same folder, run "python manage.py runserver" in order to bring the backend up.

# Frontend:
"AlignmentApp\align_controller\frontend\gui" is the entry point of the frontend application(which is using react)
Package.json file has all the dependencies.
It contains three main parts: 
1. Search - This is where the user can input the DNA sequence and see the results of the submission 
This does the post request to the backend where it passes the DNA sequence and gets the protein name and the region where it matched
2. Search History - This retrieves previous searches done by the user in the past 24 hours
3. Login - This is an input form to login and uses django-rest-auth in the backend, this also has a signup page to register new users

To run the front end
Go into: "AlignmentApp\align_controller\frontend\gui", run npm i to install dependencies
After that run npm start to bring the frontend up

