# import pandas as pd
# import random
# import csv
# from csv import writer
# import math
# import io
# from accounts.models import UserAccount, UserAccountManager
# from rest_framework.response import Response
# from rest_framework.views import APIView
# from rest_framework.renderers import JSONRenderer









# # # for x,y in main_suggestion.items():
# # #     print(x," : ",y)

# # def get_key(val):
# #     for key, value in main_suggestion.items():
# #          if val == value:
# #              return key

# # final_suggestions=[]

# # print("===============================================================================")
# # for i in sorted(main_suggestion.values(),reverse=True):
# #     final_suggestions.append(get_key(i))

# # for i,item in enumerate(final_suggestions):
# #     print("============",i,"============")
# #     print(item," : ",main_suggestion[item])
# # print("================================================================================================")
# # flag=True
# # while(flag==True):
# #     try:
# #         try:
# #             menuChoice=int(input("Enter (1) to select dishs from above mentioned\nEnter (2) to get new recommendations \nEnter (3) exit \n"))
# #         except:
# #             print("Please enter a valid choice\n")
# #             menuChoice=int(input("Enter (1) to select dishs from above mentioned\nEnter (2) to get new recommendations \nEnter (3) exit \n"))
# #     except:
# #         print("Please enter a valid choice\n")
# #         menuChoice = int(input(
# #             "Enter (1) to select dishs from above mentioned\nEnter (2) to get new recommendations \nEnter (3) exit \n"))

# #     if(menuChoice==1):
# #         print("Select any dish for your choice from above mentioned!")
# #         try:
# #             try:
# #                 choice=int(input())
# #             except:
# #                 print("Select a valid dish!")
# #                 choice = int(input())
# #         except:
# #             print("Select a valid dish!")
# #             choice = int(input())

# #         for i in range(0,928):
# #             if (data_matrix[i][0] == mood and data_matrix[i][2]==final_suggestions[choice]):
# #                 print("Dish : ", data_matrix[i][2])
# #                 print("Recipe Ingredients : ",data_matrix[i][4])
# #                 print("Recipe : ",data_matrix[i][5])
# #                 print("Image Link : ",data_matrix[i][6])
# #                 print(f"Order Related dishes via :  https://www.swiggy.com/search?query={str(data_matrix[i][2]).replace(' ', '+')}")
# #                 while(True):
# #                     try:
# #                         try:
# #                             dish_rating=int(input("Please rate this dish on the scale of 1-5 : "))
# #                         except:
# #                             print("Please enter a valid rating\n")
# #                             dish_rating = int(input("Please rate this dish on the scale of 1-5 : "))
# #                     except:
# #                         print("Please enter a valid rating\n")
# #                         dish_rating = int(input("Please rate this dish on the scale of 1-5 : "))

# #                     if(dish_rating>=1 and dish_rating<=5):
# #                         break
# #                     else:
# #                         print("Please give a vlid rating!\n")

# #                 with open('Collaborative_Filtering.csv', 'a+', encoding='utf8', newline='') as f:
# #                     mywriter = writer(f)
# #                     header = ['Mood', 'Dish','Age-Group','Gender','Rating']
# #                     mywriter = csv.DictWriter(f, fieldnames=header)
# #                     #mywriter.writeheader()
# #                     mywriter.writerow({'Mood':mood ,'Dish':data_matrix[i][2],'Age-Group':age_bracket,'Gender':gender,'Rating':dish_rating})


# #     elif (menuChoice==2):
# #         sugestion_order = random.choices(suggested_data, k=8)
# #         colab_data = pd.read_csv('Collaborative_Filtering.csv')
# #         colab_matrix = colab_data.values
# #         avg_rat = 0
# #         main_suggestion = {}
# #         # for i, item in enumerate(sugestion_order):
# #         #     print("============", i, "============")
# #         #     print(item)
# #         print("==============================================")
# #         c = 1
# #         for i in sugestion_order:
# #             avg_rat = colab_data[
# #                 (colab_data['Dish'] == i) & (colab_data['Mood'] == mood) & (colab_data['Gender'] == 'Male') & (
# #                             colab_data['Age-Group'] == age_bracket)]['Rating'].mean()
# #             if (math.isnan(avg_rat) == True):
# #                 c = c - 1
# #                 main_suggestion.update({i: c})
# #             else:
# #                 main_suggestion.update({i: avg_rat})

# #         final_suggestions = []

# #         print("===============================================================================")
# #         for i in sorted(main_suggestion.values(), reverse=True):
# #             final_suggestions.append(get_key(i))

# #         for i, item in enumerate(final_suggestions):
# #             print("============", i, "============")
# #             print(item," : ",main_suggestion[item])
# #         print("================================================================================================")


# #     elif(menuChoice==3):
# #         flag=False
# #         print("Thankyou for visiting!")
# #     else:
# #         print("Wrong Choice")


# class MoodAPIView(APIView):
#     # serializer_class = CarsSerializer
#     # throttle_scope = "cars_app"

#     # def get_queryset(self):
#     #     cars = Cars.objects.all()
#     #     return cars

#     def get(self, request, *args, **kwargs): # will get triggered when we perform a get request
        
#         try:
#             mood = request.query_params["mood"]
#             email = request.query_params["email"]
#             if(email == UserAccountManager.email):
#                 age = UserAccountManager.age
#                 gender = UserAccountManager.gender
            
#         df=pd.read_csv('food_data_final.csv')  #read the data set
#         data_matrix=df.values #convert dataset into matrix
#         suggested_data=[]
#         print(f"Dishes you can have as you are {mood} \n")
#         for i in range(0,928):
#             if(data_matrix[i][0]==mood):
#                 k=data_matrix[i][2]
#                 suggested_data.append(k)
        
#         sugestion_order=random.choices(suggested_data,k=8)

#         colab_data=pd.read_csv('Collaborative_Filtering.csv')
#         colab_matrix=colab_data.values
#         avg_rat=0
#         main_suggestion = {}

#         print("==============================================")
#         c=1
#         for i in sugestion_order:
#             avg_rat=colab_data[(colab_data['Dish']==i) & (colab_data['Mood']==mood) & (colab_data['Gender']==gender) & (colab_data['Age-Group']==age)]['Rating'].mean()
#             if(math.isnan(avg_rat)==True):
#                 c=c-1
#                 main_suggestion.update({i:c})
#             else:
#                 main_suggestion.update({i:avg_rat})
        
#         def get_key(val):
#             for key, value in main_suggestion.items():
#             if val == value:
#                 return key

#         final_suggestions=[]

#         print("===============================================================================")
#         for i in sorted(main_suggestion.values(),reverse=True):
#             final_suggestions.append(get_key(i))

#         for i,item in enumerate(final_suggestions):
#             print("============",i,"============")
#             print(item," : ",main_suggestion[item])
                




#         # except:
#         #     cars = self.get_queryset()
#         #     serializer = CarsSerializer(cars, many=True)
#         json_data = JSONRenderer().render(final_suggestions)
#         return Response(json_data)

# class detailsAPIView(APIView):
#     # serializer_class = CarsSerializer
#     # throttle_scope = "cars_app"

#     # def get_queryset(self):
#     #     cars = Cars.objects.all()
#     #     return cars

#     def post(self, request, *args, **kwargs):
#         car_data = request.data

#         new_car = Cars.objects.create(car_brand=car_data["car_brand"], car_model=car_data[
#             "car_model"], production_year=car_data["production_year"], car_body=car_data["car_body"], engine_type=car_data["engine_type"])

#         new_car.save()

#         serializer = CarsSerializer(new_car)

#         return Response(serializer.data)



# class ratingAPIView(APIView):
#     # serializer_class = CarsSerializer
#     # throttle_scope = "cars_app"

#     # def get_queryset(self):
#     #     cars = Cars.objects.all()
#     #     return cars

#     def get(self, request, *args, **kwargs): # will get triggered when we perform a get request
        
#         try:
#             mood_input = request.query_params["mood"]

#             if mood_input != None:
#                 car = Cars.objects.get(id=id)
#                 serializer = CarsSerializer(car)
#         except:
#             cars = self.get_queryset()
#             serializer = CarsSerializer(cars, many=True)

#         return Response(serializer.data)



