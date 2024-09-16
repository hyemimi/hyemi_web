import sys

N = int(input());
answer = -1;
total = 0;
arr = [];

for i in range(N):
    arr.append(int(sys.stdin.readline()));

arr = sorted(arr,key= lambda x:-x);

for i in range(0,N-2):
    if (arr[i] < arr[i+1] +  arr[i+2]):
        answer = arr[i] + arr[i+1] + arr[i+2];
        break;


print(answer);