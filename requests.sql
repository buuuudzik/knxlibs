HELPFUL SQL REQUESTS WHEN MANAGING LOGICMACHINE PRODUCT (check https://openrb.com/)

-- GET ALL VISOBJECTS AND CONVERT ITS KNX GROUP ADDRESSES TO HUMANREADABLE FORMAT AND ORDER THEM BY FLOOR, X, Y
SELECT
	f.id,
	f.name floorName,
	o.type,
	(o.object/(8*256)) || "/" || ((o.object%(8*256)) / 256) || "/" || ((o.object%(8*256)) % 256) object,
	ob.name,
	(o.statusobject/(8*256)) || "/" || ((o.statusobject%(8*256)) / 256) || "/" || ((o.statusobject%(8*256)) % 256) statusobject,
	o.params,
	o.locx,
	o.locy,
	o.name
FROM
	visobjects o
	JOIN visfloors f ON o.floor=f.id
	JOIN objects ob ON ob.address=o.object
ORDER BY f.id, o.locx, o.locy;
