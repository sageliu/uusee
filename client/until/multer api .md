
每个文件file包含以下信息：
description	    注意事项
fieldname       在表单中指定的字段名称
originalname    用户计算机上文件的原始名称
encoding        文件的编码类型
mimetype        文件的Mime类型
size文件的大小（以字节为单位）
destination     目标文件保存的文件夹          保存在DiskStorage
filename        目标中文件的名称重命名        保存在DiskStorage
path            上传文件的完整路径            保存在DiskStorage
buffer          一个缓冲区的整个文件          保存在MemoryStorage



Multer接受一个选项对象，其中最基本的是dest属性，它告诉Multer在哪里上传文件。 如果省略options对象，文件将保存在内存中，而不会写入磁盘。

默认情况下，Multer将重命名文件，以避免命名冲突。 重命名功能可以根据您的需要进行定制。

以下是可以传递给Multer的选项。
dest or storage	        存储文件的位置
fileFilter	            用于控制哪些文件被接受的功能
limits	                上传数据的限制
preservePath	        保留文件的完整路径，而不仅仅是基本名称
