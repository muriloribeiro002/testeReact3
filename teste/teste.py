import time
import string
from os import system
system('cls||clear')

text = 'Hello World'
char = ''
for ch in text:
    for i in string.printable:
        if i == ch:
            time.sleep(0.02)
            print(char+i)
            char+=i
            break
        else:
            time.sleep(0.02)
            print(char+i)