def name_log(f):
    def inner(*arg):
        t = time.time()
        x = f(*arg)
        print f.func_name + ':' + str(arg)
        return x
    return inner

def timer(f):
    def inner(*arg):
        t = time.time()
        x = f(*arg)
        print 'execution time: ' + str(time.time() - t)
        return x
    return inner



@timer
@name_log
def authenticate(uname,pword):
    if uname=="Andrew" and pword=="flipcup":
        return True
    if uname=="Andrew Kratsios" and pword=="flipcup":
        return True
    else:
        return False
