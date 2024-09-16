N = int(input());
arr = [list(map(int, input().split())) for _ in range(N)] 
arr = sorted(arr, key= lambda x: [x[1],x[0]]); # 끝나는 시간을 기준으로 정렬

endTime = 0;
cnt = 0;

for i in range(0, N) :

    if endTime <= arr[i][0]:
        cnt +=1;
        endTime = arr[i][1];
    
    
print(cnt);


