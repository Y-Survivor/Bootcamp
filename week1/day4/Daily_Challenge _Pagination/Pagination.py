class Pagination:
    def __init__(self, items=None, pageSize=10):
        self.items = items if items is not None else []
        self.pageSize = int(pageSize)  # Ensure pageSize is an integer
        self.totalPages = max(1, (len(self.items) + self.pageSize - 1) // self.pageSize)
        self.currentPage = 1  # Pages start at 1

    def getVisibleItems(self):
        """Returns the list of items visible on the current page."""
        start = (self.currentPage - 1) * self.pageSize
        end = start + self.pageSize
        return self.items[start:end]

    def prevPage(self):
        """Moves to the previous page (if possible)."""
        if self.currentPage > 1:
            self.currentPage -= 1
        return self  # For chaining

    def nextPage(self):
        """Moves to the next page (if possible)."""
        if self.currentPage < self.totalPages:
            self.currentPage += 1
        return self  # For chaining

    def firstPage(self):
        """Moves to the first page."""
        self.currentPage = 1
        return self  # For chaining

    def lastPage(self):
        """Moves to the last page."""
        self.currentPage = self.totalPages
        return self  # For chaining

    def goToPage(self, pageNum):
        """Moves to the specified page number. Clips to the nearest valid page."""
        pageNum = int(pageNum)  # Ensure pageNum is an integer
        if pageNum < 1:
            self.currentPage = 1
        elif pageNum > self.totalPages:
            self.currentPage = self.totalPages
        else:
            self.currentPage = pageNum
        return self  # For chaining