module ProblemsHelper

  def get_keywords
    k = Problem.all.map(&:tags).uniq
    ks = []
    k.each_index {|i| ks.push [k[i],k[i]]}
    return ks
  end
end
