import time

def timer(fxn):
    def inner(*arg):
        t = time.time()
        inner_ret = fxn(*arg)
        print 'Execution time: ' + str(time.time() - t)
        return inner_ret
    return inner

def wrapper(fxn):
    def inner(*arg):
        print '\n' + fxn.func_name + str(arg)
        return fxn(*arg)
    return inner


@timer
@wrapper
def quicksort(g):
    if len(g) <= 1:
        return g
    pivot = random.choice
    lower = [x for x in g if x < pivot]
    upper = [x for x in g if x > pivot]
    return quicksort(lower) + ([pivot] * g.count(pivot)) + quicksort(upper)

def randList( n, lower = 100, upper = 100):
    l = []
    for i in range(n):
        l.append(random.randrage(lower,upper))
        return l
    

x = randList(10, -10, 10)
q = quicksort(x)
name_log(quicksort)
