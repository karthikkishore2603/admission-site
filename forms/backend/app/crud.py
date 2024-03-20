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