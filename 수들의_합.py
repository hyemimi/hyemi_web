S = int(input()); # S
num = 0; # 1부터 시작, 자연수
count = 0; # N 카운트
key = 0; # 합

while True:

    num += 1;
    key += num;
    count += 1;

    if key == S :
        break;
    if key + num > S :
        key -= num;
        if (num-1 == S-key) :
            count -=1;
            break;
        num = S - key;
        key += num;
        break;

print(count);

# S = 60이고 ...
# key = 55
# num = 10
# key가 45에서 다시 ... 15가 num 이 되고 끝
# -----------------
# num = 11이 되면 ... key는 66이 되어서 초과됨.
# 따라서 55-10 = 45 + (num +6)

# 1+2+3+4+5+6 .. + 10 = 55
