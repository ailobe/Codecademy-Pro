print "Thtring, pleathe!: "
user_input = gets.chomp
user_input.downcase!

if user_input.length == 0
    puts "No thtring!"
elsif user_input.include? "s"
  user_input.gsub!(/s/, "th")
  puts "Your string is: #{user_input}"
else
  puts "Nothing to do here!"
end