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


class Formone(db.Model):
    __tablename__ = "formone"
    slno = Column(Integer, primary_key=True, autoincrement=True)
    phone = Column(String(100))
    name = Column(String(100))
    email = Column(String(100))
    course = Column(String(100))
    district = Column(String(100))
    tentative_cutoff = Column(Integer)



# db.create_all()
