

def fun(num):
    print(num)

def create_fun(num):
    def fun_bound():
        return fun(num)
    return fun_bound

funs = [create_fun(num) for num in range(1,10)]
[fu() for fu in funs]