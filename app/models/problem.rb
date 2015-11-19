class Problem < ActiveRecord::Base

  def self.get_user_solved(user)
    return [] if !user.present?
    list = Nokogiri::HTML(open("http://www.spoj.com/users/#{user}/"))
    list = list.xpath("//table[@class='table table-condensed']//a")
    return [] if !list.present?
    done = []
    list.each do |l|
      done.push l.text
    end
    done
  end

  
end
