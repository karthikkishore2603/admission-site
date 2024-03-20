from .. import db
from sqlalchemy import (
    BigInteger,
    Boolean,
    Column,
    Date,
    ForeignKey,
    Integer,
    String,
    TIMESTAMP,
)
from sqlalchemy.orm import relationship


# class Formone(db.Model):
#     __tablename__ = "formone"
#     slno = Column(Integer, primary_key=True, autoincrement=True)
#     phone = Column(String(100))
#     name = Column(String(100))
#     email = Column(String(100))
#     course = Column(String(100))
#     district = Column(String(100))
#     tentative_cutoff = Column(Integer)


class Scholarship(db.Model):
    __tablename__ = "scholarship"
    slno = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(100))
    address = Column(String(200))
    parentmailid = Column(String(100))
    parentphoneno = Column(String(100))
    studentmailid = Column(String(100))
    studentphoneno = Column(String(100))
    dob = Column(Date)
    schoolname = Column(String(100))
    schoolcode = Column(String(100))
    regno = Column(Integer)
    tentativecutoff = Column(Integer)
    category = Column(String(20))
    scholarship = Column(String(10))


# db.create_all()
