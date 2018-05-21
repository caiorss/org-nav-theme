#======== Configurations ===== #

index := dist/index.html 

#========= Rules ============ #

all : index

index : $(index)

README.html: README.org
	emacs -l ~/.emacs.d/init.el --visit README.org --batch -f org-html-export-to-html --kill

$(index): README.html
	cp README.html $(index)

update:
	cp -v -r theme/* dist/theme/ 
