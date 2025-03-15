alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)

print(p.getVisibleItems())  # ["a", "b", "c", "d"]

p.nextPage()
print(p.getVisibleItems())  # ["e", "f", "g", "h"]

p.lastPage()
print(p.getVisibleItems())  # ["y", "z"]

p.goToPage(10)  # Only 7 pages exist, so it goes to the last page
print(p.getVisibleItems())  # ["y", "z"]

p.firstPage()
print(p.getVisibleItems())  # ["a", "b", "c", "d"]