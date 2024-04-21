import os
from pytz import timezone 
from datetime import datetime
from time import sleep
ind_time = datetime.now(timezone("Asia/Kolkata")).strftime(f'%d-%m-%Y | %H:%M')
print(ind_time)
os.system("git add .")
os.system(f'git commit -m "{ind_time}"')
os.system("git push")
sleep(2)
