import pandas as pd
import random
import csv
from csv import writer
import math

df=pd.read_csv('food_data_final.csv')  #read the data set

data_matrix=df.values #convert dataset into matrix
while(True):
    try:
        try:
            gender_choice=int(input("Please select your gender!\n1. Male \n2. Female\n"))
        except ValueError as ve:
            print("Please enter a valid choice\n")
            gender_choice = int(input("Please select your gender!\n1. Male \n2. Female\n"))
    except:
        print("Please enter a valid choice\n")
        gender_choice = int(input("Please select your gender!\n1. Male \n2. Female\n"))
    gender=''
    if(gender_choice==1):
        gender='Male'
        break
    elif (gender_choice==2):
        gender='Female'
        break
    elif(gender_choice>2):
        print("Wrong choice! Please select valid gender\n")
    else:
        print("Wrong choice! Please select valid gender\n")

while(True):
    try:
        try:
            age_choice=int(input("Please select your age bracket!\n1. 13-18 \n2. 19-24 \n3. 25-30 \n4. 31-36 \n5. 37-42 \n6. 43-Above\n"))
        except:
            print("Please enter a valid choice\n")
            age_choice = int(input("Please select your age bracket!\n1. 13-18 \n2. 19-24 \n3. 25-30 \n4. 31-36 \n5. 37-42 \n6. 43-Above\n"))
    except:
        print("Please enter a valid choice\n")
        age_choice = int(input("Please select your age bracket!\n1. 13-18 \n2. 19-24 \n3. 25-30 \n4. 31-36 \n5. 37-42 \n6. 43-Above\n"))
    age_bracket=''
    if(age_choice==1):
        age_bracket='13-18'
        break
    elif (age_choice==2):
        age_bracket='19-24'
        break
    elif(age_choice==3):
        age_bracket='25-30'
        break
    elif(age_choice==4):
        age_bracket='31-36'
        break
    elif(age_choice==5):
        age_bracket='37-42'
        break
    elif(age_choice==6):
        age_bracket='43-above'
        break
    else:
        print("Wrong choice! Please elect valid age group\n")





suggested_data=[]

while(True):
    mood_input=input("Enter your mood from (Angry,Sad,Happy,Bored) \n").strip()
    if(mood_input=='Bored' or mood_input=='Happy' or mood_input=='Sad' or mood_input=='Angry'):
        mood=mood_input
        break
    else:
        print("Wrong Input \n")


print(f"Dishes you can have as you are {mood} \n")
for i in range(0,928):
    if(data_matrix[i][0]==mood):
        k=data_matrix[i][2]
        suggested_data.append(k)


sugestion_order=random.choices(suggested_data,k=8)

# for i,item in enumerate(sugestion_order):
#     print("============",i,"============")
#     print(item)

colab_data=pd.read_csv('Collaborative_Filtering.csv')
colab_matrix=colab_data.values
avg_rat=0

main_suggestion = {}

print("==============================================")
c=1
for i in sugestion_order:
    avg_rat=colab_data[(colab_data['Dish']==i) & (colab_data['Mood']==mood) & (colab_data['Gender']=='Male') & (colab_data['Age-Group']==age_bracket)]['Rating'].mean()
    if(math.isnan(avg_rat)==True):
        c=c-1
        main_suggestion.update({i:c})
    else:
        main_suggestion.update({i:avg_rat})

# for x,y in main_suggestion.items():
#     print(x," : ",y)

def get_key(val):
    for key, value in main_suggestion.items():
         if val == value:
             return key

final_suggestions=[]

print("===============================================================================")
for i in sorted(main_suggestion.values(),reverse=True):
    final_suggestions.append(get_key(i))

for i,item in enumerate(final_suggestions):
    print("============",i,"============")
    print(item," : ",main_suggestion[item])
print("================================================================================================")
flag=True
while(flag==True):
    try:
        try:
            menuChoice=int(input("Enter (1) to select dishs from above mentioned\nEnter (2) to get new recommendations \nEnter (3) exit \n"))
        except:
            print("Please enter a valid choice\n")
            menuChoice=int(input("Enter (1) to select dishs from above mentioned\nEnter (2) to get new recommendations \nEnter (3) exit \n"))
    except:
        print("Please enter a valid choice\n")
        menuChoice = int(input(
            "Enter (1) to select dishs from above mentioned\nEnter (2) to get new recommendations \nEnter (3) exit \n"))

    if(menuChoice==1):
        print("Select any dish for your choice from above mentioned!")
        try:
            try:
                choice=int(input())
            except:
                print("Select a valid dish!")
                choice = int(input())
        except:
            print("Select a valid dish!")
            choice = int(input())

        for i in range(0,928):
            if (data_matrix[i][0] == mood and data_matrix[i][2]==final_suggestions[choice]):
                print("Dish : ", data_matrix[i][2])
                print("Recipe Ingredients : ",data_matrix[i][4])
                print("Recipe : ",data_matrix[i][5])
                print("Image Link : ",data_matrix[i][6])
                print(f"Order Related dishes via :  https://www.swiggy.com/search?query={str(data_matrix[i][2]).replace(' ', '+')}")
                while(True):
                    try:
                        try:
                            dish_rating=int(input("Please rate this dish on the scale of 1-5 : "))
                        except:
                            print("Please enter a valid rating\n")
                            dish_rating = int(input("Please rate this dish on the scale of 1-5 : "))
                    except:
                        print("Please enter a valid rating\n")
                        dish_rating = int(input("Please rate this dish on the scale of 1-5 : "))

                    if(dish_rating>=1 and dish_rating<=5):
                        break
                    else:
                        print("Please give a vlid rating!\n")

                with open('Collaborative_Filtering.csv', 'a+', encoding='utf8', newline='') as f:
                    mywriter = writer(f)
                    header = ['Mood', 'Dish','Age-Group','Gender','Rating']
                    mywriter = csv.DictWriter(f, fieldnames=header)
                    #mywriter.writeheader()
                    mywriter.writerow({'Mood':mood ,'Dish':data_matrix[i][2],'Age-Group':age_bracket,'Gender':gender,'Rating':dish_rating})


    elif (menuChoice==2):
        sugestion_order = random.choices(suggested_data, k=8)
        colab_data = pd.read_csv('Collaborative_Filtering.csv')
        colab_matrix = colab_data.values
        avg_rat = 0
        main_suggestion = {}
        # for i, item in enumerate(sugestion_order):
        #     print("============", i, "============")
        #     print(item)
        print("==============================================")
        c = 1
        for i in sugestion_order:
            avg_rat = colab_data[
                (colab_data['Dish'] == i) & (colab_data['Mood'] == mood) & (colab_data['Gender'] == 'Male') & (
                            colab_data['Age-Group'] == age_bracket)]['Rating'].mean()
            if (math.isnan(avg_rat) == True):
                c = c - 1
                main_suggestion.update({i: c})
            else:
                main_suggestion.update({i: avg_rat})

        final_suggestions = []

        print("===============================================================================")
        for i in sorted(main_suggestion.values(), reverse=True):
            final_suggestions.append(get_key(i))

        for i, item in enumerate(final_suggestions):
            print("============", i, "============")
            print(item," : ",main_suggestion[item])
        print("================================================================================================")


    elif(menuChoice==3):
        flag=False
        print("Thankyou for visiting!")
    else:
        print("Wrong Choice")