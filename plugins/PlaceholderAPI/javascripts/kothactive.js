function setup() {
	var active = '%koth_active%';
	if (active == "Diaban, Diaban2")
	return "&fĐịa bàn &a(1) &7&&a (2)";
    if (active == "Diaban2, Diaban")
	return "&fĐịa bàn &a(1) &7&&a (2)";
	if (active == "Diaban")
	return "&fĐịa bàn &a(1) &7&&c (2)";
	if (active == "Diaban2")
	return "&fĐịa bàn &c(1) &7&&a (2)";
} 
setup();