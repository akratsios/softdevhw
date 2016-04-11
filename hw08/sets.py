def union(a,b):
    return a + [x for x in b if x not in a]
    
def sym_diff(a,b):
    return union(set_diff(a,b),set_diff(b,a))

def intersection(a,b):
    return[x for x in a if x in b]

def set_diff(u,a):
    return [x for x in u if x not in a]

def cart_product(a,b):
    return [(x,y)
        for x in a
        for y in b]

c = [5, 7, 19, 56, 87]
d = [36, 28, 52, 1, 123]

print "\nList 1"
print c
print "List 2"
print d

print "\nUnion"
print union(c,d)

print "\nIntersection"
print intersection(c,d)

print "\nSet Difference"
print set_diff(c,d)

print "\nSymetric Difference"
print sym_diff(c,d)

print "\nCartesian Product"
print cart_product(c,d)
