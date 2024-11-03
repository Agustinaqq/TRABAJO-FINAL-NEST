return this.service.getMusicById( Number( id ) );
}

@Get('/name/:name')
getmusicByName( @Param('name') name:string ) {
    return this.service.getMusicByName( name );
}
@Get('/artist/:artista')
getmusicByArtista( @Param('artista') artista:string ) {
    return this.service.getMusicByArtista( artista );
}
@Post() 
postmusic (@Body() newmusic : music) {
    return this.service.postMusic( newmusic );
}
    
@Put(":id")
putMusic( @Body() nuevosDatos:music, @Param("id") id:string ): boolean {
    return this.service.putMusic( nuevosDatos, Number(id) );
}

@Delete(":id")
deleteMusic( @Param("id") id:string) : boolean {
    return this.service.deleteMusic( Number(id) );
}
}
