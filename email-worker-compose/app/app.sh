#!/bin/sh

#dependencias psyco = acesso banco postgre
pip install bottle==0.12.13 psycopg2==2.7.3.2 redis==2.10.5
python -u sender.py