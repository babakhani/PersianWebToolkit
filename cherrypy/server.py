
from os import path
import cherrypy
from pymlconf import ConfigManager

server_dir = path.abspath(path.dirname(__file__))
conf_dir = path.join(server_dir,'conf')
root_dir = path.join(server_dir,'..')

class Root(object):
    
    @cherrypy.expose
    def index(self):
        return "Something"
    
if __name__ == '__main__':
    cfg = ConfigManager(init_value={
        '/':{'tools.staticdir.root': root_dir}},dirs=[conf_dir])
    print cfg
    cherrypy.quickstart(Root(), '', cfg)

    
    