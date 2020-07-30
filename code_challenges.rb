# ASSESSMENT 4: Ruby Coding Practical Questions

#(1) Create a method that takes in an array and returns an array with only odd numbers sorted from least to greatest.

fullArr1 = [4, 9, 0, '7', 8, true, 'hey', 7, 199, -9, false, 'hola']
# Expected output: [-9, 7, 9, 199]
fullArr2 = ['hello', 7, 23, -823, false, 78, nil, '67', 6, 'Number']
# Expected output: [-823, 7, 23]

# pseudocode:
# 1. Create function to take in array and return only numbers
# 2. filter through new array of numbers to return only odd numbers
# 3. Use the built-in method to sort the number array from least to greatest

def odd_numb array
    new_arr= array.select! do |value|
        value.class == Integer
    end
    new_arr.select { |value| value % 2 != 0 }.sort
end
p odd_numb fullArr1
p odd_numb fullArr2

def odd_num array
  array.select do {||}

# (2) Create a class called Bike that is initialized with a model, wheels, and a frame size. The default number of wheels is 2. Create a get_info method that returns a sentence with all the data from the bike object.

class Bike
    def initialize (model, frame)
        @model= model
        @wheels= '2 wheels'
        @frame= frame
    end
    def get_info
        "The #{@model} bike has #{@wheels} and a #{@frame}cm frame."
    end
end
my_bike = Bike.new 'Trek', 168
p my_bike.get_info
# Expected output example: 'The Trek bike has 2 wheels and a 168cm frame.'

# ----------------------Practicing Class Inheritance---------------------

# (3) Add a bell to the bike class and create a method that will ring the bell when the method is called.
# (4) Add a speedometer to the Bike class. The speed should be initialized at 0.
# (5) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

class Functions < Bike
    def initialize (model, frame)
        super
        @bell= 'no bell'
        @speedometer= 0
    end
    def ring_bell
        @bell = "Bring-Bring!"
    end
    def pedal_faster speed #need help here
        @speedometer += speed
    end
    def break break #need help here
        @speedometer = ''
        if @speedometer >= 2
            @speedometer -= 1
        else
            @speedometer= 0
        end

        # def break break #need help here
        #     if @speedometer <= speed
        #     @speedometer = 0
        #     else
        #         @speedometer -= speed
        #     end

    end
    def speed
        "Your #{@model} is speeding at #{@speedometer}"
    end
end
my_bike_functions = Functions.new 'Yamaha', 158
p my_bike_functions.ring_bell
p my_bike_functions.pedal_faster 10
p my_bike_functions.brake 12
p my_bike_functions.speed
p my_bike_functions.get_info

# Expected output example: my_bike.speed => 0
# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0
