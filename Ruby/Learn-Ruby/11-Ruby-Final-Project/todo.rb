=begin
    
User Story 1: As a user I can create a Todo List
User Story 2: As a user I can add tasks to the todo list
User Story 3: As a user I can see all the tasks in a list
User Story 4: As a user, I can perform actions on the Todo List through a menu.
User Story 5: As a user I can write a list to a text file.
User Story 6: As a user I can read a Todo List from a text file.
User Story 7: As a user I can delete a task from a list
User Story 8: As a user I can update a task on a list.
User Story 9: As a user I can enable a status for a task.
User Story 10: As a user I can toggle a status as complete or incomplete.

=end


# Modules

module Menu

    def menu
    puts "Please choose from the following list",
        "1) Add",
        "2) Show",
        "3) Update",
        "4) Delete",
        "5) Write to File",
        "6) Read from File",
        "7) Toggle Status",
        "Q) Quit"
      end

    def show
        menu
    end
end


module Promptable

    def prompt(message='What would you like to do?', symbol=':> ')
    puts message
    print symbol
    gets.chomp
    end
end


# Classes

class List
    attr_reader :all_tasks

    def initialize
        @all_tasks = []
    end

    def add(task)
        all_tasks << task
    end

    def show
        if all_tasks.length > 0
        all_tasks.map.with_index { |t, i| "(#{i.next}): #{t.to_s}"}
        else
        "Task List System is empty"
        end  
    end

    def delete(task_number)
    all_tasks.delete_at(task_number - 1)
    end

    def update(task_number, task)
        all_tasks[task_number - 1] = task
    end

    def write_to_file(filename)
        machinified = @all_tasks.map(&:to_machine).join("\n")
        IO.write(filename, machinified)
        puts "The following tasks have been saved to #{filename}:", @all_tasks.map(&:to_s)
    end

    def read_from_file(filename)
        file = IO.readlines(filename)
        file.each { |line|
            bool, description = line.strip.split(':')
            status = (bool == 'true') ? true : false
            add(Task.new(description, status))
        }
        puts "The following tasks have been loaded:", @all_tasks.map(&:to_s)
    end

    def toggle(task_number)
        all_tasks[task_number -1].toggle_status
    end
end


class Task
    attr_reader :description
    attr_accessor :status

    def initialize(description, status=false)
    @description = description
    @status = status
    end

    def to_s
        "#{represent_status} : #{description}"
    end

    def to_machine
        "#{status}:#{description}"
    end

    def completed?
        status
    end

    def toggle_status
        @status = !completed?
    end

    private
    def represent_status
        completed? ? "[X]" : "[ ]"
    end
end


# Program runner

if __FILE__ == $PROGRAM_NAME
    include Menu
    include Promptable
    my_list = List.new
    puts 'Welcome to the TodoList Program!',
    "This menu will help you use the Task List System"
      until ['q'].include?(user_input = prompt(show).downcase)
      case user_input
        when '1'
          my_list.add(Task.new(prompt('Task Description?')))
        when '2'
          puts my_list.show
        when '3'
            puts my_list.show
            my_list.update(prompt('Which task to update?').to_i, 
              Task.new(prompt('Task Description?')))
        when '4'
            puts my_list.show
            my_list.delete(prompt('Select the number of the task you want to delete').to_i)
        when '5'
          my_list.write_to_file(prompt('What is the filename to write to?'))
        when '6'
            puts "Saved files:", "\n", Dir.glob("*").reject { |i| i == "todo.rb" }, "\n"
          begin
            my_list.read_from_file(prompt('Which file would you like to read?'))
          rescue Errno::ENOENT
            puts 'File name not found.'
          end
        when '7'
            puts my_list.show
              my_list.toggle(prompt('Which would you like to toggle the status for?').to_i)
        else
        puts 'Try again, I did not understand.'
      end
      prompt('Press enter to continue', '')
    end
   puts 'Thanks for using the menu system!'
  end
