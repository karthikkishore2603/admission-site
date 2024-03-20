from . import db, models


# Store formone data
def store_formone(data: dict):
    data = models.Formone(**data)
    print("Storing formone data:", data)
    print("phone:", data.phone)
    db.session.add(data)
    db.session.commit()
    db.session.flush()

# Get all formone data
def get_formone():
    return models.Formone.query.all()

# Check if the formone data exists with phone number\
def check_formone(phone: int):
    return models.Formone.query.filter_by(phone=phone).all()

# Store scholarship data
def store_scholarship(data: dict):
    data = models.Scholarship(**data)
    print("Storing scholarship data:", data)
    print("name:", data.name)
    db.session.add(data)
    db.session.commit()
    db.session.flush()