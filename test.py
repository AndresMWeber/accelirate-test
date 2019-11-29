# takes in a variable
# on the console will generate a pyramid which as a base with length as passed into the function
# if you pass 5 it will draw a pyramid of length 5 as the base

symbol = '+'

def pyramidCreator(length):
    output = ''
    for i in range(1 if (length % 2) else 2, length+1, 2):
        spaces = (length - i) / 2
        output += '{SPACES}{PYRAMID}{SPACES}\n'.format(SPACES=' '*spaces, PYRAMID=symbol*i)
    return output

print(pyramidCreator(4))
print(pyramidCreator(5))
print(pyramidCreator(8))
print(pyramidCreator(9))