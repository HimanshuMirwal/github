#print("hello world");
message ="""hello i am a comment """
print(message.upper()+'  '+'how are you?')

collection = ['hello','i','am','python','program']

for item in collection:
    print(item)

key_data={1:'first', 2:'second' ,3:'third' , 4:'fourth' }

print(key_data)

data =True

if data:
    print('hello')

a=1
b=2
c=3
if a>b:
     print('a is greater')
else:
     print('b is greater')
x=1
while x < 10:
    print(x)
    x+=1

def abc():
    print('hello i am a method ')

#abc()

def temp(*small, **llarge):
    print(small)
    print(llarge)
    
temp('hello','python',name='test',age=19)